

function Main() {
    return (
        <div className="container">
            <form>
                <div className="inputContainer">
                    <label htmlFor="email"></label>
                    <input 
                    type="text" 
                    nome='email' 
                    placeholder="Telefone, nome de usuário ou email" 
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="password"></label>
                    <input 
                    type="password" 
                    nome='password' 
                    placeholder="senha" 
                    />
                </div>

                <a href="">Esqueceu sua senha ?</a>

                <button className="button">
                    Enviar <img src="" alt="" />
                </button>

                <h4>_______________ OU _______________</h4>

            </form>
        </div>
    )
}

export default Main