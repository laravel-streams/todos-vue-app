import { reactive } from 'vue';
import { getStream } from '@/streams';
import { PaginatedEntryCollection } from '@laravel-streams/api-client/types/EntryCollection';


export class Store {
    public todos: Todo[] = [];
    public per_page      = 10;
    public current_page  = 0;
    public total         = 0;

    constructor() {
        return reactive(this);
    }

    async updateTodos() {
        const stream  = await getStream('todos');
        const entries = await stream.getRepository().all();
        this.todos    = entries.toArray();
    }

    async paginate(page: number) {
        const stream                            = await getStream('todos');
        const entries: PaginatedEntryCollection = await stream.getEntries().paginate(this.per_page, page);
        this.todos                              = entries.map(entry => {
            return {
                ...entry.toObject(),
                get entry() {return entry; },
                save: () => entry.save(),
            };
        }).toArray();
        this.total                              = entries.meta.total;
        this.current_page                       = entries.meta.current_page;
    }
}


export const store: Store = new Store();


export default store;