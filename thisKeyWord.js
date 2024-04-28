const user={
    read(){
        this.a= 10
        this.b= 10
    },

    add :function(){
        return this.a +this.b
    },
    mul:function(){
        return this.a * this.b
    }
}
const values =user.read()
console.log(values)
console.log(user.add())
console.log(user.mul())

