import React, { useState } from "react"
import styled from "styled-components"

const ThemeSelect = styled.div`
  display: flex;
`

const SwitchContainer = styled.div`
  width: 32px;
  height: 16px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  align-self: center;
`
const Switch = styled.button`
  width: 48px;
  height: 16px;
  top: 0;
  left: 0;
  border: none;
  background-color: red;
  position: absolute;
  transition: 0.2s ease-in;

  &.true {
    transform: translateX(0);
  }

  &.false {
    transform: translateX(-16px);
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
`

const Toggle = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
`

const IndicatorDark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 24px;
  background-color: #ffc400;
  z-index: 1;
`

const IndicatorLight = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 16px;
  width: 24px;
  background-color: green;
  z-index: 1;
`

const CurrentMode = styled.p`
  margin: 0;
  padding-right: 1rem;
`

const DarkMode = () => {
  const [darkMode, toggleDarkMode] = useState(false)
  const changeMode = () => {
    toggleDarkMode(darkMode => !darkMode)
    document.body.classList.toggle("light-mode")
  }
  return (
    <>
      <ThemeSelect>
        <CurrentMode>{darkMode ? `${"Polar"}` : `${"Wasp"}`}</CurrentMode>
        <SwitchContainer>
          <Switch
            onClick={changeMode}
            className={darkMode ? `${"true"}` : `${"false"}`}
          >
            <IndicatorDark />
            <Toggle />
            <IndicatorLight />
          </Switch>
        </SwitchContainer>
      </ThemeSelect>
    </>
  )
}

export default DarkMode
