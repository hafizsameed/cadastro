import React, { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [repeatError, setRepeatError] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        switch(name){
            case 'email':
                value.length < 1 ? setEmailError("Esse campo é obrigatório") : value.length > 0 && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) ? setEmailError("O e-mail deve ser válido") : setEmailError(""); setEmail(value)
                break
            case 'reemail':
                value.length > 0 && value === email ? setRepeatError("") : setRepeatError("Os dois e-mails devem ser iguais.")
                break
            case 'password':
                value.length > 0 ? setPasswordError("") : setPasswordError("Esse campo é obrigatório") 
                break
        }
    }

    return(
        <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img src={require('../../assets/kiwify-green-logo.2af0e50.png')} className="mx-auto h-12 w-auto"/>
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"> Entrar na sua conta </h2>
                <p className="mt-2 text-center text-base leading-5 text-gray-600">Ou <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 cursor-pointer">entrar na sua conta existente</a></p>
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
                        <label for="password" className="block text-sm font-medium leading-5 text-gray-700"> Repetir e-mail </label>
                        <div>
                            <input type={"password"} onChange={handleChange} autoComplete={"current-password"} name="reemail" className={`${repeatError.length > 0 ? "form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-red-500 w-full" : "form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"}`} />
                        </div>
                    </div>
                    {
                        repeatError.length > 0 &&
                        <div className="text-xs text-red-500 mt-1">{repeatError}</div>
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
                    <div className="mt-6">
                        <label className="relative flex items-start mt-2">
                            <div className="flex items-center h-5">
                                <input type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer" />
                                <div class="ml-2 text-sm leading-5"><span class="font-medium text-gray-700">Eu li e aceito os <a href="https://kiwify.com.br/termos-de-uso" target="_blank" class="underline"> termos de uso</a>, <a href="https://kiwify.com.br/licenca-de-uso-software" target="_blank" class="underline"> termos de licença de uso de software</a>, <a href="https://kiwify.com.br/politica-de-conteudo" target="_blank" class="underline"> política de conteúdo</a> da Kiwify </span></div>
                            </div>
                        </label>
                    </div>
                    <div className="mt-6">
                        <span className="block w-full rounded-md shadow-sm"><button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">Entrar</button></span>
                    </div>
                </form>
            </div>
        </div>
    );    
}

export default Signup;