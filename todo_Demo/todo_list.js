var todoList = {
    props:["tasks"],
    template:`
     <ul>
       <todo-item v-for="(t,i) of tasks" :key="i" :task="t" :i="i" :tasks=tasks></todo-item>
     </ul>
    `,
    components:{todoItem}
}