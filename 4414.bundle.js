"use strict";(self.webpackChunkpanscript=self.webpackChunkpanscript||[]).push([[4414],{4414:(e,r,a)=>{a.r(r),a.d(r,{default:()=>o});const o='/*\r\n\r\nOs valores em PanScript têm um de três tipos primitivos:\r\n- Texto\r\n- Número\r\n- Lógico\r\n\r\n*/\r\n\r\n// Valores textuais são cercados de aspas duplas (") ou aspas simples (\')\r\ntexto nome = "João"\r\nescreva("Isto é um texto")\r\nescreva(\'Isto também é um texto\')\r\nescreva("Isto é " + "uma expressão textual")\r\nescreva("Isto é um texto com interpolação: {nome}")\r\nescreva(\'Isto é um texto sem interpolação: {nome}\')\r\nnova_linha()\r\n\r\n// mais sobre interpolação de texto a seguir\r\n\r\n\r\n// Valores numéricos\r\nconstante numero PI = pi()\r\nconstante numero TAU = PI * 2\r\nescreva(42)\t\t\t// inteiro positivo\r\nescreva(-10)\t\t// número negativo\r\nescreva(3.14)\t\t// número real\r\nescreva(.5)\t\t\t// parte inteira opcional\r\nescreva(12.)\t\t// parte fracionária opcional\r\nescreva(0x0f)\t\t// número hexadecimal\r\nescreva(0b101010)\t// número binário\r\nescreva(PI)\r\nescreva(TAU)\r\nnova_linha()\r\n\r\n// mais sobre contantes a seguir\r\n\r\n\r\n// Valores lógicos\r\nlogico a = verdadeiro\r\nlogico b = falso\r\nescreva("nao verdadeiro: {nao verdadeiro}")\r\nescreva("nao falso: {nao falso}")\r\nescreva("nao a: {nao a}")\r\nescreva("nao b: {nao b}")\r\nescreva("verdadeiro e verdadeiro: {verdadeiro e verdadeiro}")\r\nescreva("verdadeiro e falso: {verdadeiro e falso}")\r\nescreva("falso e verdadeiro: {falso e verdadeiro}")\r\nescreva("falso e falso: {falso e falso}")\r\nescreva("a e b: {a e b}")\r\nescreva("verdadeiro ou verdadeiro: {verdadeiro ou verdadeiro}")\r\nescreva("verdadeiro ou falso: {verdadeiro ou falso}")\r\nescreva("falso ou verdadeiro: {falso ou verdadeiro}")\r\nescreva("falso ou falso: {falso ou falso}")\r\nescreva("a ou b: {a ou b}")\r\nnova_linha()\r\n\r\n// mais sobre expressões a seguir'}}]);