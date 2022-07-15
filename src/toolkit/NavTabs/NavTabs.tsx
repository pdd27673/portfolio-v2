import { Box, Tabs } from "@mui/material";
import React from "react";
import { LinkTab } from "../LinkTab/LinkTab";

type Props = {};

export const NavTabs = (props: Props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box>
        <Tabs value={value} onChange={handleChange} >
          <LinkTab label="Home" href="/drafts" />
          <LinkTab label="Skills" href="/drafts" />
          <LinkTab label="Contact" href="/drafts" />
        </Tabs>


      </Box>
    </div>
  );
};
