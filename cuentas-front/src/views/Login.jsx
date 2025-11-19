import '../login.css'
import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState("admin@gmail.com")
    const [password, setPassword] = useState("123")

    const submit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            const data = await res.json()
            console.log("RESPUESTA", data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <section className="background-radial-gradient overflow-hidden">
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">

                        {/* Texto */}
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ color: "hsl(218, 81%, 85%)" }}>
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ zIndex: 10 }}>
                                The best offer <br />
                                <span style={{ color: "hsl(218, 81%, 95%)" }}>for your business</span>
                            </h1>
                            <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                                ab ipsum nisi dolorem modi. Quos?
                            </p>
                        </div>

                        {/* Formulario */}
                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form onSubmit={submit}>

                                        {/* Email */}
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="form3Example3"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                autoComplete="email"
                                            />
                                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                                        </div>

                                        {/* Password */}
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="form3Example4"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                autoComplete="current-password"
                                            />
                                            <label className="form-label" htmlFor="form3Example4">Password</label>
                                        </div>

                                        {/* Checkbox */}
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                id="form2Example33"
                                                defaultChecked
                                            />
                                            <label className="form-check-label" htmlFor="form2Example33">
                                                Subscribe to our newsletter
                                            </label>
                                        </div>

                                        {/* Botón */}
                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                                            Sign up
                                        </button>

                                        {/* Redes */}
                                        <div className="text-center">
                                            <p>or sign up with:</p>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}