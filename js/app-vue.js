const app = Vue.createApp({
    data(){
        return {
            //we create an array of images with the route of the images, and the all background style for it
            images: [
                "url('../img/contBcg-0.jpeg') center/cover fixed no-repeat",
                "url('../img/contBcg-1.jpeg') center/cover fixed no-repeat",
                "url('../img/contBcg-2.jpeg') center/cover fixed no-repeat",
                "url('../img/contBcg-3.jpeg') center/cover fixed no-repeat",
                "url('../img/contBcg-4.jpeg') center/cover fixed no-repeat",
            ],
            //we set a counter to 0
            count: 0,
        }
    },

    methods: {
        //this method will upgrade our counter until 4, and tehn get back to 0, so it looks like we make a loop through the images
        nextPicture(){
            if(this.count < 4){
                this.count++
            } else {
                this.count = 0
            }
        },
        //This works the same as the nextPicture method, but going backwards
        backPicture(){
            if(this.count > 0){
                this.count--
            } else {
                this.count = 4
            }
        }
    }
})

app.mount('.container')