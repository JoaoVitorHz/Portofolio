import { HeaderCss, Dropdown } from "./headerStyle";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function Header(){
    return(
        <HeaderCss>
            <header>
                <div className="RedesSociasIcones">
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-araujo-96a78522b/" target="_blank" title="Linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/viitor_zy/" target="_blank" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://web.whatsapp.com/send?phone=55119981808091" target="_blank" title="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="https://github.com/JoaoVitorHz" target="_blank" title="GitHub"><i className="fa-brands fa-github"></i></a>
                </div>
                <div className="menu">
                    <a href="#">Sobre min</a>
                    <a href="#ProjetosScroll">Projetos</a>
                    <a href="#TecnologiaScroll">Tecnologias</a>
                    <a href="#ContatoScroll">Contato</a>
                </div>
                <Dropdown>
                    <DropdownMenu.Root >
                        <DropdownMenu.DropdownMenuTrigger className="trigger">
                            <button><i className="fa-solid fa-bars"></i></button>
                        </DropdownMenu.DropdownMenuTrigger> 
                        <DropdownMenu.Content>
                            <DropdownMenu.Group className="group">
                                <a href="#">Sobre min</a>
                                <a href="#ProjetosScroll">Projetos</a>
                                <a href="#TecnologiaScroll">Tecnologias</a>
                                <a href="#ContatoScroll">Contato</a>
                            </DropdownMenu.Group>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Dropdown>
            </header>
        </HeaderCss>
    );
}