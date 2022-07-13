import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native';
import { visualizarTodosContatos } from './ContatoModel';

export default function CadastrarContatos(navigation) {
    return (
        <View style={estilo.container}>
            <TextInput style={estilo.campoTexto}
                placeholder="Digite o código do Contato"
            />
            <TextInput style={estilo.campoTexto}
                placeholder="Digite o Nome do Contato"
            />
            <TextInput style={estilo.campoTexto}
                placeholder="Digite o Fone do Contato"
            />
            <TextInput style={estilo.campoTexto}
                placeholder="Digite o E-mail do Contato"
            />
            <TouchableOpacity style={estilo.botao}>
                <Text style={estilo.textoBotao}>Salvar o Contato</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#DCDCDC",
        alignItems:'center',
        justifyContent:'center'
    },
    campoTexto:{
        backgroundColor:"#2F4F4F"
    },
    botao:{
        backgroundColor:"#000080"
    },
    textoBotao:{
        fontSize:20
    }
});