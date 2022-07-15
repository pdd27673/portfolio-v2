import {
  AppBar,
  Box,
  Container,
  Icon,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SvgIcon } from "@mui/material";
import { LinkTab } from "../LinkTab/LinkTab";
import styles from './NavTabs.module.scss'

type Props = {};

export const NavTabs = (props: Props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <Box>
        <Tabs value={value} onChange={handleChange} >
          <LinkTab label="Home" href="/drafts" />
          <LinkTab label="Skills" href="/drafts" />
          <LinkTab label="Contact" href="/drafts" />
        </Tabs>
      </Box> */}
      <AppBar position="static" color="inherit">
        <Container>
          <Toolbar>
            <Typography>
              <Tabs value={value} onChange={handleChange}>
                <div className={styles.pageNav}>
                    <LinkTab label="Home" href="/drafts" className={""} />
                    <LinkTab label="Skills" href="/drafts" />
                    <LinkTab label="Contact" href="/drafts" />
                </div>
                
                <div className={styles.social}>
                    <TwitterIcon />
                    <GitHubIcon />
                    <LinkedInIcon />
                </div>
              </Tabs>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
