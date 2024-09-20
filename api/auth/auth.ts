


export type SignUpDTO = {
    username:string,
    password:string,
    email:string,
}

export const registration = async (data:SignUpDTO) => {
    const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
    })

    if(response.status >= 200 && response.status < 300)
        return response.json()
}