import bcrypt from 'bcryptjs'
import type { RegisterForm } from './types.server'
import {prisma} from './prisma.server'


export const createUser = async (user: RegisterForm) => {
    if (user.password !== user.confirmPassword){
        throw new Error("Password do not match");
    }


    const passwordHash = await bcrypt.hash(user.password, 10)
    const newUser = await prisma.user.create({
        data:{
            email: user.email,
            password:passwordHash,
            firstName: user.firstName,
            lastName: user.lastName
        },
    });
    console.log('User created:', newUser); // Logging the newly created user
    return {id: newUser.id, email: user.email}
}


