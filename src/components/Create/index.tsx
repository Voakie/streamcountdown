import * as React from "react"
import {
  Form,
  Label,
  MaskedInput,
  Segment,
  Input,
  ExitCustom,
  InputWithExit,
  CreateButton,
  Heading,
  Subtext,
  BoldLink,
} from "./elements"
import { Wrapper } from "../Wrapper"
import { ButtonSelect, ButtonSelectOption } from "../ButtonSelect"
import ReactTooltip from "react-tooltip"
import { HelpTooltip } from "../HelpTooltip"
import { X } from "./X"

const dateEasyOptions: ButtonSelectOption[] = [
  {
    name: "today",
    value: "Today",
  },
  {
    name: "tomorrow",
    value: "Tomorrow",
  },
  {
    name: "custom",
    value: "Custom...",
  },
]

const cdtypeEasyOptions: ButtonSelectOption[] = [
  {
    name: "both",
    value: "Both",
  },
  {
    name: "absolute",
    value: "Absolute",
  },
  {
    name: "relative",
    value: "Relative",
  },
]

const colorEasyOptions: ButtonSelectOption[] = [
  {
    name: "white",
    value: "White",
  },
  {
    name: "black",
    value: "Black",
  },
  {
    name: "custom",
    value: "Custom...",
  },
]

const backgroundEasyOptions: ButtonSelectOption[] = [
  {
    name: "grey",
    value: "Grey",
  },
  {
    name: "green",
    value: "Green",
  },
  {
    name: "image",
    value: "Image...",
  },
]

interface CreateState {
  dateEasyOption: string
  cdtypeEasyOption: string
  colorEasyOption: string
  backgroundEasyOption: string

  dateCustomValue: string
  colorCustomValue: string
  backgroundCustomValue: string

  timeValue: string
  textValue: string
  languageValue: string

  darkmode: boolean
}

export class Create extends React.Component<{}, CreateState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      dateEasyOption: "today",
      cdtypeEasyOption: "both",
      colorEasyOption: "white",
      backgroundEasyOption: "grey",

      dateCustomValue: "",
      colorCustomValue: "",
      backgroundCustomValue: "",

      timeValue: "",
      textValue: "",
      languageValue: "",

      darkmode: localStorage.getItem("darkmode") === "dark" ? true : false,
    }

    this.onDateEasyChange = this.onDateEasyChange.bind(this)
    this.onCdtypeEasyChange = this.onCdtypeEasyChange.bind(this)
    this.onColorEasyChange = this.onColorEasyChange.bind(this)
    this.onBackgroundEasyChange = this.onBackgroundEasyChange.bind(this)

    this.exitDateCustom = this.exitDateCustom.bind(this)
    this.exitColorCustom = this.exitColorCustom.bind(this)
    this.exitBackgroundCustom = this.exitBackgroundCustom.bind(this)

    this.onDateChange = this.onDateChange.bind(this)
    this.onColorChange = this.onColorChange.bind(this)
    this.onBackgroundChange = this.onBackgroundChange.bind(this)

    this.onTimeChange = this.onTimeChange.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.onLanguageChange = this.onLanguageChange.bind(this)

    this.create = this.create.bind(this)

    this.toggleDarkmode = this.toggleDarkmode.bind(this)
  }

  onDateEasyChange(e: ButtonSelectOption) {
    this.setState({ dateEasyOption: e.name })
  }

  onCdtypeEasyChange(e: ButtonSelectOption) {
    this.setState({ cdtypeEasyOption: e.name })
  }

  onColorEasyChange(e: ButtonSelectOption) {
    this.setState({ colorEasyOption: e.name })
  }

  onBackgroundEasyChange(e: ButtonSelectOption) {
    this.setState({ backgroundEasyOption: e.name })
  }

  exitDateCustom() {
    this.setState({ dateEasyOption: "today" })
  }

  exitColorCustom() {
    this.setState({ colorEasyOption: "black" })
  }

  exitBackgroundCustom() {
    this.setState({ backgroundEasyOption: "grey" })
  }

  onDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ dateCustomValue: e.target.value })
  }

  onColorChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ colorCustomValue: e.target.value })
  }

  onBackgroundChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ backgroundCustomValue: e.target.value })
  }

  onTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ timeValue: e.target.value })
  }

  onTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ textValue: e.target.value })
  }

  onLanguageChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ languageValue: e.target.value })
  }

  create() {
    let date = ""
    if (this.state.dateEasyOption === "today") {
      const now = new Date()
      const dt = now.getDate()
      const month = now.getMonth() + 1
      date =
        "" +
        now.getFullYear() +
        "" +
        (month > 9 ? month : "0" + month) +
        "" +
        (dt > 9 ? dt : "0" + dt)
    } else if (this.state.dateEasyOption === "tomorrow") {
      const tmrw = new Date()
      tmrw.setDate(new Date().getDate() + 1)

      const dt = tmrw.getDate()
      const month = tmrw.getMonth() + 1
      date =
        "" +
        tmrw.getFullYear() +
        "" +
        (month > 9 ? month : "0" + month) +
        "" +
        (dt > 9 ? dt : "0" + dt)
    } else {
      const custom = this.state.dateCustomValue.split(".")
      date = custom[2] + custom[1] + custom[0]
    }
    if (!Number.isInteger(Number.parseInt(date))) return alert("Please enter a valid date")

    let time = this.state.timeValue.replace(":", "")
    if (!Number.isInteger(Number.parseInt(time))) return alert("Please enter a valid time")

    let timeDisplay
    if (this.state.cdtypeEasyOption === "both") {
      timeDisplay = 0
    } else if (this.state.cdtypeEasyOption === "absolute") {
      timeDisplay = 1
    } else {
      timeDisplay = 2
    }

    let color = this.state.colorEasyOption
    if (this.state.colorEasyOption === "custom") {
      color = this.state.colorCustomValue
    }

    let background = ""
    if (this.state.backgroundEasyOption === "green") {
      background = "green"
    } else if (this.state.backgroundEasyOption === "image") {
      background = this.state.backgroundCustomValue
    }

    let language = this.state.languageValue
    let text = this.state.textValue

    document.location.href =
      "index.html?t=" +
      encodeURIComponent(color) +
      "&i=" +
      encodeURIComponent(background) +
      "&c=" +
      encodeURIComponent(date + time) +
      "&l=" +
      encodeURIComponent(language) +
      "&txt=" +
      encodeURIComponent(text) +
      "&td=" +
      encodeURIComponent(timeDisplay)
  }

  toggleDarkmode() {
    this.setState({ darkmode: !this.state.darkmode })
    localStorage.setItem("darkmode", !this.state.darkmode ? "dark" : "light")
  }

  render() {
    return (
      <Wrapper className={this.state.darkmode ? "dark" : ""}>
        <Heading>Voakie's Streamcountdown</Heading>
        <Subtext>
          <BoldLink href="https://github.com/Voakie/streamcountdown" target="_blank">
            GitHub
          </BoldLink>{" "}
          -{" "}
          <BoldLink onClick={this.toggleDarkmode}>
            {this.state.darkmode ? "Light mode" : "Dark mode"}
          </BoldLink>
        </Subtext>

        <Form>
          <Segment>
            <div style={{ paddingRight: "10px", flexGrow: 1 }}>
              <Label>
                Date <HelpTooltip msg="Enter custom date as dd.mm.yyyy" />
              </Label>

              {this.state.dateEasyOption === "custom" ? (
                <InputWithExit>
                  <MaskedInput
                    value={this.state.dateCustomValue}
                    onChange={this.onDateChange}
                    className="short"
                    mask="99.99.9999"
                    alwaysShowMask={true}
                  />
                  <ExitCustom onClick={this.exitDateCustom}>
                    <X />
                  </ExitCustom>
                </InputWithExit>
              ) : (
                <ButtonSelect
                  options={dateEasyOptions}
                  value={this.state.dateEasyOption}
                  onChange={this.onDateEasyChange}
                />
              )}
            </div>

            <div style={{ width: "80px" }}>
              <Label>Time</Label>
              <MaskedInput
                value={this.state.timeValue}
                onChange={this.onTimeChange}
                mask="99:99"
                alwaysShowMask={true}
              />
            </div>
          </Segment>

          <Label>
            Time Display
            <HelpTooltip msg="Both will display both. Absolute is 'starts at 10pm' and Relative is 'starts in 10 minutes'" />
          </Label>
          <ButtonSelect
            options={cdtypeEasyOptions}
            value={this.state.cdtypeEasyOption}
            onChange={this.onCdtypeEasyChange}
          />

          <Label>
            Text Color <HelpTooltip msg="Any CSS color is valid" />
          </Label>
          {this.state.colorEasyOption === "custom" ? (
            <InputWithExit>
              <Input
                value={this.state.colorCustomValue}
                onChange={this.onColorChange}
                className="short"
                placeholder="Custom CSS color"
              />
              <ExitCustom onClick={this.exitColorCustom}>
                <X />
              </ExitCustom>
            </InputWithExit>
          ) : (
            <ButtonSelect
              options={colorEasyOptions}
              value={this.state.colorEasyOption}
              onChange={this.onColorEasyChange}
            />
          )}

          <Label>
            Background <HelpTooltip msg="Custom images should fit your stream resolution" />
          </Label>

          {this.state.backgroundEasyOption === "image" ? (
            <InputWithExit>
              <Input
                value={this.state.backgroundCustomValue}
                onChange={this.onBackgroundChange}
                className="short"
                placeholder="Custom URL"
              />
              <ExitCustom onClick={this.exitBackgroundCustom}>
                <X />
              </ExitCustom>
            </InputWithExit>
          ) : (
            <ButtonSelect
              options={backgroundEasyOptions}
              value={this.state.backgroundEasyOption}
              onChange={this.onBackgroundEasyChange}
            />
          )}

          <Segment style={{ marginTop: "15px" }}>
            <div style={{ paddingRight: "10px", flexGrow: 1 }}>
              <Label>
                Text <HelpTooltip msg="Example for a custom text: 'The show begins'" />
              </Label>
              <Input
                value={this.state.textValue}
                onChange={this.onTextChange}
                placeholder="The stream will start"
              />
            </div>

            <div style={{ width: "130px" }}>
              <Label>
                Language
                <HelpTooltip msg="Enter a language code like 'de'. Leave blank and it will be automatically determined" />
              </Label>
              <Input
                value={this.state.languageValue}
                onChange={this.onLanguageChange}
                placeholder="en"
              />
            </div>
          </Segment>

          <CreateButton onClick={this.create}>Create</CreateButton>
        </Form>

        <Subtext>
          Instructions:{" "}
          <BoldLink
            href="https://obsproject.com/forum/resources/stream-countdown.469/"
            target="_blank"
          >
            OBS
          </BoldLink>{" "}
          -{" "}
          <BoldLink
            href="https://voakie.com/projects/stream-countdown/manual/xsplit.html"
            target="_blank"
          >
            xSplit
          </BoldLink>
        </Subtext>
        <Subtext>
          <BoldLink href="mailto:contact@voakie.com">Feedback</BoldLink> is always appreciated 🤠
        </Subtext>

        <ReactTooltip effect="solid" />
      </Wrapper>
    )
  }
}
