import Tab from "@mui/material/Tab";


interface LinkTabProps {
    label?: string;
    href?: string;
  }

export function LinkTab(props: LinkTabProps) {
    return (
      <Tab
        component="a"
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

