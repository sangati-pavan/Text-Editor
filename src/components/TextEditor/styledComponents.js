import styled from 'styled-components'

export const TextEditorBg = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TextEditorCard = styled.div`
  background-color: #1b1c22;
  height: 80%;
  width: 70%;
  display: flex;
  padding: 20px;
`
export const ImageSideContainer = styled.div`
  width: 50%;
  padding: 20px;
`
export const MainHeading = styled.h1`
  color: #f8fafc;
  text-align: center;
`
export const ImageElement = styled.img`
  width: 80%;
  height: 80%;
  text-align: center;
  margin-left: 10%;
`
export const TextSideContainer = styled.div`
  width: 48%;
  background-color: #25262c;
  height: 98%;
  border-radius: 5px;
  border: 1px solid #334155;
`
export const ButtonsList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #334155;
  margin-top: 0px;
`
export const ButtonItem = styled.li`
  margin-top: 10px;
  margin-right: 10px;
`
export const StyledButtonBold = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.boldActive ? `#faff00` : `#f1f5f9`)};
`
export const StyledButtonItalic = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #f1f5f9;
  color: ${props => (props.italicActive ? `#faff00` : `#f1f5f9`)};
`
export const StyledButtonUnderline = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #f1f5f9;
  color: ${props => (props.underlineActive ? `#faff00` : `#f1f5f9`)};
`
export const TextArea = styled.textarea`
  background-color: transparent;
  width: 100%;
  height: 84%;
  border: none;
  font-weight: ${props => (props.boldActive ? 'bold' : 'normal')};
  font-style: ${props => (props.italicActive ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underlineActive ? 'underline' : 'normal')};
  outline: none;
  color: #cbd5e1;
  padding: 10px;
  font-size: 20px;
`
