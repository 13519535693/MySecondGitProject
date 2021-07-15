Vue.component("todo",{
    template:`
     <div>
       <h1>代办事项列表</h1>
       <todo-add :tasks="tasks"></todo-add>
       <todo-list :tasks="tasks"></todo-list>
     </div>
    `,
    data(){
        return{
            tasks:['吃饭','睡觉','打怪兽']
        }
    },
    components:{todoAdd,todoList}
})