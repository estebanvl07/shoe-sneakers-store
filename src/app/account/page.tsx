"use client"
import { Button } from "@nextui-org/button"
import Image from "next/image"
import { useState } from "react"

const AccountPage = () => {
    const [registerMode, setRegisterMode] = useState(false)

    const info = {
        "login": {
            title: "BIENVENIDO DE NUEVO",
            description: "Inicia sesión para acceder a una experiencia de compra mejorada",
            notAccountText: "¿No tienes una cuenta?"
        },
        "register": {
            title: "REGISTRATE AQUI",
            description: "Registrate ahora con una de estas opciones",
            notAccountText: "¿Ya tienes una cuenta?",
        }
    }[registerMode ? "register" : "login"]

    return (
        <section className="max-w-[24rem] flex flex-col items-center justify-center gap-2 mx-auto max-h-[32rem] h-screen">
            <h2 className="font-semibold">{info.title}</h2>
            <p>{info.description}</p>
            <Button variant="bordered" className="border-1 w-full mt-4">
                {registerMode ? "Registrate con Google" : "Iniciar con Google"} 
                <Image src="/Google.svg" alt="Google icon" width="24" height="24" /> 
            </Button>
            <p>
                {info.notAccountText},{" "} 
                <button className="hover:font-semibold text-primary" onClick={() => setRegisterMode(!registerMode)}>{registerMode ? "Iniciar sesión" : "Crear cuenta"} </button>
            </p>
        </section>
    )
}

export default AccountPage