var todoItem = {
    props:["task","i","tasks"],
    template:`
      <li>
       {{i+1}} {{task}} <a href="#" @click="del">x</a>
      </li>
    `,
    methods:{
        del(){
            this.tasks.splice(this.i,1);
        }
    }
}