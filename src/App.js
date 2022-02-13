import Header from './components/Header';
import Main from "./components/Main";
import {useEffect, useState} from "react";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import {getAgeFrom} from "./helpers/dateHelpers";
import {getNewId} from "./services/idServices";
import Timer from "./components/Timer";
import CheckboxInput from "./components/CheckboxInput";
import OnlineOffline from "./components/OnlineOffline";

export default function App() {
    // const state = useState('Thwany');
    // const name = state[0];
    // const setName = state[1];
    const [name, setName] = useState('Thwany');
    const [birthDate, setBirthDate] = useState('1997-10-09');
    const [showTimer, setShowTimer] = useState(false);
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        document.title = name;
    }, [name]);

    useEffect(() => {

        function toggleOnline() {
            setIsOnline(true);
        }

        function toggleOffline() {
            setIsOnline(false);
        }

        window.addEventListener('online', toggleOnline);
        window.addEventListener('offline', toggleOffline);

        return () => {
            window.removeEventListener('online', toggleOnline);
            window.removeEventListener('offline', toggleOffline);
        }
    }, []);

    function handleNameChange(newName) {
        setName(newName);
    }

    function handleBirthDateChange(newBirthDate) {
        setBirthDate(newBirthDate);
    }

    function toggleShowTimer() {
        setShowTimer(currentShowTimer => !currentShowTimer);
    }

    return (
        <>
            <Header>react-hello</Header>

            <Main>
                <OnlineOffline isOnline={isOnline} />

                {showTimer && (
                    <div className="text-right mt-1">
                        <Timer/>
                    </div>
                )}

                <CheckboxInput
                    labelDescription="Mostrar cronômetro"
                    onCheckboxChange={toggleShowTimer}
                />

                <TextInput
                    id={getNewId()}
                    labelDescription="Digite o seu nome: "
                    inputValue={name}
                    onInputChange={handleNameChange}
                    autoFocus
                />
                <DateInput
                    id={getNewId()}
                    labelDescription="Digite a sua data de nascimento: "
                    inputValue={birthDate}
                    onInputChange={handleBirthDateChange}
                />
                <p>O seu nome é {name}, com {name.length} caracteres, e você possui {getAgeFrom(birthDate)} anos.</p>
            </Main>
        </>
    )
}
