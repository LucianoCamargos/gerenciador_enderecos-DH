import "./addressListScene.css";
import Header from "../../components/Header";
import AddressCard from "../../components/AddressCard";
const addresList = [
    {
        id: 1,
        numero: "23",
        rua: "Mario Bross",
        bairro: "Vila Nova",
        cidade: "São Paulo",
        estado: "SP"

    },
    {
        id: 2,
        numero: "50",
        rua: "José Inacio",
        bairro: "Brás",
        cidade: "São Paulo",
        estado: "SP"

    },
    {
        id: 3,
        numero: "60",
        rua: "17 abril",
        bairro: "Ipiranga",
        cidade: "São Paulo",
        estado: "SP"

    }
]

function addressListScene() {
    return (
        <>
            <Header title="Lista de Endereços" />
            <main>
                {addresList.map((address) => (
                    <AddressCard id={address.id}
                        numero={address.rua}
                        rua={address.rua}
                        bairro={address.bairro}
                        cidade={address.cidade}
                        estado={address.estado} />
                ))}
            </main>
        </>
    );
}


export default addressListScene