/** @jsx jsx */
import { jsx, Box, Button, Container, Flex, Input, Styled } from 'theme-ui'

import React from 'react'
import { Link } from 'gatsby'

export default class Newsletter extends React.Component {
  render() {
    return (
      <Container p={3} bg="muted">
        <Box
          as="form"
          action="https://simplecasual.email/subscribe"
          method="POST"
          accept-charset="utf-8"
        >
          <Styled.h3
            sx={{
              mt: 0,
            }}
          >
            Follow along
          </Styled.h3>
          <Styled.p>
            If you want to know about new posts, add your email below.
            Alternatively, you can{' '}
            <Styled.a as={Link} to="/feed.xml">
              subscribe with RSS
            </Styled.a>
            .
          </Styled.p>
          <div
            sx={{
              display: 'none',
            }}
          >
            <label for="hp">HP</label>
            <br />
            <input type="hidden" name="list" value="xjZqV7MLxnxsPMANjDYiRQ" />
            <input type="hidden" name="subform" value="yes" />
            <input type="text" name="hp" id="hp" />
          </div>
          <Flex>
            <Input
              placeholder="Email address"
              type="email"
              name="email"
              id="email"
              sx={{ flex: '1 1 auto', bg: 'white' }}
            />
            <Button
              as="input"
              type="submit"
              name="submit"
              value="Subscribe"
              id="submit"
              sx={{ ml: 3, display: 'block', minWidth: 'auto' }}
            />
          </Flex>
          <Button
            id="success"
            value="Success"
            sx={{ display: 'none', mt: 2, width: '100%' }}
          >
            Success
          </Button>
        </Box>
      </Container>
    )
  }
}
