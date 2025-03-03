import React from 'react'
import { NavbarCandidatos } from '../components/NavbarCandidatos'
import { BodyUsuariosDireccion } from '../components/BodyUsiariosDirecion'
import { FooterCandidatos } from '../components/FooterCandidatos'

export const UsuariosDireccion = () => {
  return (
    <div>
        <NavbarCandidatos/>
        <BodyUsuariosDireccion>
          
        </BodyUsuariosDireccion>
        <FooterCandidatos/>
    </div>
  )
}