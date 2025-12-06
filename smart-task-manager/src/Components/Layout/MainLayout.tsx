import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import './MainLayout.scss'
import Sidebar from "../Sidebar/Sidebar";

export default function MainLayout() {
    return(
        <div>
            <header>
                <Sidebar/>
            </header>
            <main>
                <Container>
                    <Outlet/>
                </Container>   
            </main>
        </div>
    )
}