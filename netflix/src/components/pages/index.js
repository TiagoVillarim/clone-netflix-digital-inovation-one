import React from "react";
import Style from "../styles/main.css";
import { FaPlay, FaInfoCircle } from "react-icons/fa";




export default function Home() {
    return(
        <>
            <header>
                <div className="container">
                    <h1 className="title">Netflix</h1>
                    <nav>
                        <a href="#">Início</a>
                        <a href="#">Séries</a>
                        <a href="#">Filmes</a>
                        <a href="#">Documentários</a>
                    </nav>
                </div>
            </header>

            <main>
                <div className="filme-principal">
                    <div className="container">
                        <h3 className="titulo">Os simpsons</h3>
                        <p className="description">Os Simpsons moram na cidade de Springfield, uma cidade americana como qualquer outra. Homer trabalha como inspetor de segurança em uma usina de energia nuclear, Marge tenta manter a paz em sua família, Bart é um travesso garoto de 10 anos, Lisa, de 8 anos, é a inteligente da família que adora tocar saxofone e é vegetariana e a pequena Maggie conquista todos enquanto não larga sua chupeta. E a série tem um rico, e muitas vezes estranho, universo de personagens que também habitam Springfield. Com roteiros inteligentes, humor subversivo e divertidamente genial, a série faz piadas de si mesma e de todo mundo que aparecer em seu caminho.</p>

                    <div className="buttons">
                            <button role="button" className="button">
                                <i><FaPlay/></i>
                                ASSISTIR AGORA
                            </button>
                            <button role="button" className="button">
                                <i><FaInfoCircle/></i>
                                MAIS INFORMAÇÔES
                            </button>
                    </div>
                    </div>
                </div>
            </main>
        </>
    )
}