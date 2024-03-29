import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: white;
    padding: 15px;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`
    width: 120%;
    height: 15%;
    margin-top: 0%;
    background-color: #F9FBFF;
`;

export const Form = styled.View`
    flex: 1;
    width: 380px;
    height: 500px;
`;

export const Description = styled.Text`
    height: 100%;
    width: 90%;
    font-size: 16px;
    color: grey;
    text-align: left;
    margin-left: 4%;
    z-index: 999;
`;


export const InputView = styled.View`
    position: relative;
    width: 400px;
    height: 60%;
    margin-top: 10%;
    background-color: white;
`;

/* CRIACOA DE COMPONENTES PAGINA DE PERFIL */
export const ProfilePic = styled.Image`
    width: 64px;
    height: 64px;
    borderRadius: 32;
    margin-left: 10%;
    margin-top: 5%;
`;

export const PerfilInfo = styled.View`
    width: 65%;
    height: 40%;
    margin-left: 28%;
    margin-top: -14%;
    background-color: translucent;
    align-content: center;
`;

export const BTNConta = styled.TouchableOpacity`
    height: 45%;
    width: 42%;
    margin-top: 4%;
    background-color: translucent;
    align-items: center;
    borderBottomWidth: 1px;
    borderColor: grey;
`;

export const TitleConta = styled.Text`
    font-size: 15px;
    font-weight: 600;
    text-align: center;
`;

export const Nome = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #2C599D;
    text-align: center;
    text-align: left;
`;

export const Botao = styled.View`
    height: 5%;
    width: 90%;
    margin-left: 3%;
    margin-top: -70%;
    margin-bottom: 2%;
    flexDirection: row;
    flexWrap: wrap;
    borderBottomWidth: 1px;
    borderBottomColor: grey; 
`;

export const Proposta = styled.View`
    height: 5%;
    width: 90%;
    margin-top: 3%;
    margin-bottom: 2%;
    margin-left: 3%;
    borderBottomWidth: 1px;
    borderBottomColor: grey; 
`;

export const Notification = styled.View`
    height: 5%;
    width: 90%;
    margin-top: 3%;
    margin-left: 3%;
    borderBottomWidth: 1px;
    borderBottomColor: grey; 
`;

export const Help = styled.View`
    height: 5%;
    width: 90%;
    margin-top: 15%;
    margin-left: 3%;
    borderBottomWidth: 1px;
    borderBottomColor: grey; 
`;

export const Anunciar = styled.View`
    height: 5%;
    width: 90%;
    margin-top: 5%;
    margin-left: 3%;
    borderBottomWidth: 1px;
    borderBottomColor: grey; 
`;

export const Indicar = styled.View`
    height: 5%;
    width: 90%;
    margin-top: 5%;
    margin-left: 3%;
    borderBottomWidth: 1px;
    borderBottomColor: grey; 
`;

export const About = styled.View`
    height: 5%;
    width: 90%;
    margin-top: 5%;
    margin-left: 3%;
    borderBottomWidth: 1px;
    borderBottomColor: grey; 
`;

export const Termos = styled.View`
    height: 5%;
    width: 90%;
    margin-top: 5%;
    margin-left: 3%;
    borderBottomWidth: 1px;
    borderBottomColor: grey; 
`;

export const TitleBTN = styled.Text`
    font-size: 16px;
    color: #193A6F;
    margin-top: -0.5%;
    margin-left: 4%;
`;

export const Icone = styled.Image`
    height: 22px;
    width: 22px;
    margin-top: -1%;
    margin-bottom: 0%;
`;

export const Touch = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    flexDirection: row;
    flexWrap: wrap;
`;

export const LogoVw = styled.View`
    height: 5%;
    margin-top: 10%;
    width: 100%;
    background-color: white;
`;