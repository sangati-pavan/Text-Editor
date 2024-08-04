import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  TextEditorBg,
  TextEditorCard,
  ImageSideContainer,
  MainHeading,
  ImageElement,
  TextSideContainer,
  ButtonsList,
  ButtonItem,
  StyledButtonBold,
  StyledButtonItalic,
  StyledButtonUnderline,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    boldActive: false,
    italicActive: false,
    underlineActive: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({boldActive: !prevState.boldActive}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({italicActive: !prevState.italicActive}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({underlineActive: !prevState.underlineActive}))
  }

  render() {
    const {boldActive, italicActive, underlineActive} = this.state
    return (
      <TextEditorBg>
        <TextEditorCard>
          <ImageSideContainer>
            <MainHeading>Text Editor</MainHeading>
            <ImageElement
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageSideContainer>
          <TextSideContainer>
            <ButtonsList>
              <ButtonItem>
                <StyledButtonBold
                  data-testid="bold"
                  onClick={this.onClickBold}
                  boldActive={boldActive}
                >
                  <VscBold size={25} />
                </StyledButtonBold>
              </ButtonItem>
              <ButtonItem>
                <StyledButtonItalic
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  italicActive={italicActive}
                >
                  <GoItalic size={25} />
                </StyledButtonItalic>
              </ButtonItem>
              <ButtonItem>
                <StyledButtonUnderline
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  underlineActive={underlineActive}
                >
                  <AiOutlineUnderline size={25} />
                </StyledButtonUnderline>
              </ButtonItem>
            </ButtonsList>
            <TextArea
              onChange={this.onChangeText}
              boldActive={boldActive}
              underlineActive={underlineActive}
              italicActive={italicActive}
            />
          </TextSideContainer>
        </TextEditorCard>
      </TextEditorBg>
    )
  }
}
export default TextEditor
