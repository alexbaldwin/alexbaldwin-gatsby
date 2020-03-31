/** @jsx jsx */
import {
  jsx,
  Box,
  Button,
  Input,
} from 'theme-ui'

import React from "react"

export default class Newsletter extends React.Component {
  render() {
    return (
      <Box
      as="form"
      action="https://simplecasual.email/subscribe"
      method="POST"
      accept-charset="utf-8"
    >
        <Input placeholder="Name" type="text" name="name" id="name"/>
        <Input placeholder="Email" type="email" name="email" id="email"/>

        <div
          sx={{
            display: 'none',
          }}
        >
          <label for="hp">HP</label><br/>
          <input type="text" name="hp" id="hp"/>
        </div>

        <input type="hidden" name="list" value="xjZqV7MLxnxsPMANjDYiRQ"/>
        <input type="hidden" name="subform" value="yes"/>
        <Button as="input" type="submit" name="submit" id="submit"/>

      </Box>
    )
  }
}
