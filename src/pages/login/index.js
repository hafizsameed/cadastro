import React, { useState } from "react";

const Login = () => {
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        switch(name){
            case 'email':
                value.length < 1 ? setEmailError("Esse campo é obrigatório") : value.length > 0 && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) ? setEmailError("O e-mail deve ser válido") : setEmailError("")
                break
            case 'password':
                value.length > 0 ? setPasswordError("") : setPasswordError("Esse campo é obrigatório") 
        }
    }

    return(
        <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img src={require('../../assets/kiwify-green-logo.2af0e50.png')} className="mx-auto h-12 w-auto"/>
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"> Entrar na sua conta </h2>
                <p className="mt-2 text-center text-base leading-5 text-gray-600">Ou <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 cursor-pointer">fazer cadastro</a></p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div>
                        <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">E-mail</label>
                        <div>
                            <input type={'text'} onChange={handleChange} autoComplete="username" name="email" className={`${emailError.length > 0 ? "form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-red-500 w-full" : "form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"}`} />
                        </div>
                    </div>
                    {
                        emailError.length > 0 &&
                        <div className="text-xs text-red-500 mt-1">{emailError}</div>
                    }
                    <div className="mt-6">
                        <label for="password" className="block text-sm font-medium leading-5 text-gray-700"> Senha </label>
                        <div>
                            <input type={"password"} onChange={handleChange} autoComplete={"current-password"} name="password" className={`${passwordError.length > 0 ? "form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-red-500 w-full" : "form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"}`} />
                        </div>
                    </div>
                    {
                        passwordError.length > 0 &&
                        <div className="text-xs text-red-500 mt-1">{passwordError}</div>
                    }
                    <div className="mt-2 flex items-center justify-end">
                        <div className="text-sm leading-5">
                            <a className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">Esqueceu a senha?</a>
                        </div>
                    </div>
                    <div className="mt-6">
                        <span className="block w-full rounded-md shadow-sm"><button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">Entrar</button></span>
                    </div>
                </form>
            </div>
        </div>
    );    
}

export default Login;