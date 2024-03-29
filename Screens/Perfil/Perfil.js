import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView, SectionList } from 'react-native';
import {
    Container,
    Header,
    Form,
    InputView,
    Description,
    ProfilePic,
    Nome,
    PerfilInfo,
    BTNConta,
    TitleConta,
    Botao,
    Icone,
    TitleBTN,
    Touch,
    Proposta,
    Notification,
    Help,
    Anunciar,
    Indicar,
    About,
    Termos,
    LogoVw
} from './style';
import Menu from '../Menu Bar/Menu';
import LogoSVG from '../../assets/logomarca.svg'

export default function Perfil({ navigation }) {

    return (
        <Container>
            {/* */}
            <LogoVw>
                <LogoSVG
                    height={110}
                    width={180}
                    style={{ marginTop: '-11%', marginLeft: '25%' }}
                />
            </LogoVw>
            <Header>
                <ProfilePic
                    source={require('../../assets/Smiling.jpeg')}
                />
                <PerfilInfo>
                    <Nome>Fernando de Souza Dias</Nome>
                    <BTNConta onPress={() => navigation.navigate('Profile')}>
                        <TitleConta>Gerenciar conta</TitleConta>
                    </BTNConta>
                </PerfilInfo>
            </Header>


            <Form>
                <InputView>
                    <Description>Para alugar ou comprar</Description>
                </InputView>

                <Botao>
                    <Touch onPress={() => navigation.navigate('Visitas')}>
                        <Icone
                            source={require('../../assets/Perfil/calendar.png')}
                        />
                        <TitleBTN>Visitas</TitleBTN>
                    </Touch>
                </Botao>

                <Proposta>
                    <Touch onPress={() => navigation.navigate('Propostas')}>
                        <Icone
                            source={require('../../assets/Perfil/contract.png')}
                        />
                        <TitleBTN>Propostas</TitleBTN>
                    </Touch>
                </Proposta>

                <Notification>
                    <Touch onPress={() => navigation.navigate('Notificacoes')}>
                        <Icone
                            source={require('../../assets/Perfil/bell.png')}
                        />
                        <TitleBTN>Notificações</TitleBTN>
                    </Touch>
                </Notification>

                <Help>
                    <Touch>
                        <Icone
                            source={require('../../assets/Perfil/help.png')}
                        />
                        <TitleBTN>Ajuda</TitleBTN>
                    </Touch>
                </Help>

                <Anunciar>
                    <Touch>
                        <Icone
                            source={require('../../assets/Perfil/assistance.png')}
                        />
                        <TitleBTN>Anunciar imóvel</TitleBTN>
                    </Touch>
                </Anunciar>

                <Indicar>
                    <Touch>
                        <Icone
                            source={require('../../assets/Perfil/home-bold.png')}
                        />
                        <TitleBTN>Indicar imóveis</TitleBTN>
                    </Touch>
                </Indicar>

                <About>
                    <Touch>
                        <Icone
                            source={require('../../assets/Perfil/group.png')}
                        />
                        <TitleBTN>Sobre nós</TitleBTN>
                    </Touch>
                </About>


                <Termos>
                    <Touch>
                        <Icone
                            source={require('../../assets/Perfil/padlock.png')}
                        />
                        <TitleBTN>Termos e privacidade</TitleBTN>
                    </Touch>
                </Termos>

            </Form>
        </Container>

    );
}

const styles = StyleSheet.create({
    inputFocused: {
        borderWidth: 1,
        borderColor: 'grey',
    },
    input: {
        borderWidth: 1,
        borderColor: '#0571ff'
    },
    scrollView: {
        flex: 0.5,
        backgroundColor: 'white',
    },
});