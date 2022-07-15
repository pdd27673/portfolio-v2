import Tab from "@mui/material/Tab";


interface LinkTabProps {
    label?: string;
    href?: string;
    className?: string;
  }

export function LinkTab(props: LinkTabProps) {
    return (
      <Tab
        component="a"
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
        }}
        className={props.className}
        {...props}
      />
    );
  }


