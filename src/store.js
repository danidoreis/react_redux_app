import { createStore } from "redux"

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Messi",
            foto: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg"
        },
        {
            id: 2,
            nombre: "Maradona",
            foto: "https://s3-us-west-2.amazonaws.com/esdeargentino.com/wp-content/uploads/2017/03/06173612/f-arg-maradona.jpg"
        },
        {
            id: 3,
            nombre: "Batistuta",
            foto: "https://upload.wikimedia.org/wikipedia/commons/6/60/Batistuta-Latorre_en_Boca_Jrs._1991.jpg"
        },
        {
            id: 4,
            nombre: "Abbondanzieri",
            foto: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Roberto_Abbondanzieri_%28cropped%29.jpg"
        },
        {
            id: 5,
            nombre: "Samuel",
            foto: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Walter_Samuel_FC_Internazionale.jpg"
        },
        {
            id: 6,
            nombre: "Rojo",
            foto: "https://upload.wikimedia.org/wikipedia/commons/2/23/NIG-ARG_%284%29.jpg"
        },
        {
            id: 7,
            nombre: "Aguero",
            foto: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Sergio_Ag%C3%BCero_2018.jpg"
        },
        {
            id: 8,
            nombre: "Mascherano",
            foto: "https://upload.wikimedia.org/wikipedia/commons/4/45/Mascherano_casagob.jpg"
        },
        {
            id: 9,
            nombre: "Zanetti",
            foto: "https://upload.wikimedia.org/wikipedia/commons/6/65/Javier_Zanetti_%E2%80%93_Portugal_vs._Argentina%2C_9th_February_2011_%281%29.jpg"
        },
        {
            id: 10,
            nombre: "Ruggeri",
            foto: "https://upload.wikimedia.org/wikipedia/commons/3/31/Ruggeri_2.jpg"
        },
        {
            id: 11,
            nombre: "Riquelme",
            foto: "https://upload.wikimedia.org/wikipedia/commons/4/42/Juan_Riquelme_beim_Audi_Cup.jpg"
        },
        {
            id: 12,
            nombre: "Fillol",
            foto: "https://upload.wikimedia.org/wikipedia/commons/3/37/Ubaldo_Fillol_2006.jpg"
        },
        {
            id: 13,
            nombre: "Veron",
            foto: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sebasti%C3%A1n_Ver%C3%B3n.png"
        },
        {
            id: 14,
            nombre: "Ayala",
            foto: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Roberto_Ayala_y_Javier_Zanetti_-_07FEB2007_-_Francia_-_presidencia-govar.jpg"
        },
        {
            id: 15,
            nombre: "Heinze",
            foto: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Gabriel_Ivan_Heinze.jpg"
        },
        {
            id: 16,
            nombre: "Palermo",
            foto: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Palermo_-_Estudiantes_LP_1997.JPG"
        },
        {
            id: 17,
            nombre: "Tevez",
            foto: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Carlos_T%C3%A9vez_ManCity2.jpg"
        },
        {
            id: 18,
            nombre: "Aimar",
            foto: "https://upload.wikimedia.org/wikipedia/commons/8/80/Match_legends_2017_CC_%284%29.jpg"
        },
        {
            id: 19,
            nombre: "Caniggia",
            foto: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Caniggia_worldcup.jpg"
        },
        {
            id: 20,
            nombre: "Perfumo",
            foto: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Perfumo_1969.jpeg"
        },
        {
            id: 21,
            nombre: "Cambiasso",
            foto: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Cambiasso_Inter_2013.jpg"
        },
        {
            id: 22,
            nombre: "Burruchaga",
            foto: "https://upload.wikimedia.org/wikipedia/commons/7/70/Burruchaga_gritando_gol_de_argentina.JPG"
        },
        {
            id: 23,
            nombre: "Kempes",
            foto: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Mario_Kempes_Argentina_vs._Holanda.JPG"
        },
        {
            id: 24,
            nombre: "Simeone",
            foto: "https://upload.wikimedia.org/wikipedia/commons/5/52/Simeone_1987.jpg"
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {

    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "AGREGAR_SUPLENTE" ) {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if ( action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)