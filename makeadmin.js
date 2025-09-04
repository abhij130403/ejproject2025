const User=require('./models/User');
const bcrypt=require('bcrypt')
async function makeAdmin(){
    try {
        let user =await User.findOne({email:'sanjaychoudhry@gmail.com'});
        if(user){
            console.log("user updated....")
        }else{
        
        let user=new User();
        user.firstName='aadi';
        user.lastName='rai';
        user.email='sanjaychoudhry356@gmail.com';
        let encryptredPassword=bcrypt.hashSync('123456',10);
        user.password=encryptredPassword;
        user.userType='Admin';
        await user.save();
        console.log('user saved successfuly....')
    }
    } catch (err) {
        console.log(err)
    }
}
module.exports=makeAdmin