import "./NavLinks.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function NavLinks({
  scrollToSection,
  aboutRef,
  educationRef,
  careerRef,
  projectsRef,
  contactRef,
  onToggleDrawer,
  className,
}) {
  return (
    <List className={className}>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(aboutRef);
          {
            className === "drawer-list" && onToggleDrawer(false);
          }
        }}
      >
        Über mich
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(educationRef);
          {
            className === "drawer-list" && onToggleDrawer(false);
          }
        }}
      >
        Bildung
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(careerRef);
          {
            className === "drawer-list" && onToggleDrawer(false);
          }
        }}
      >
        Berufserfahrung
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(projectsRef);
          {
            className === "drawer-list" && onToggleDrawer(false);
          }
        }}
      >
        Projekte
      </ListItem>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(contactRef);
          {
            className === "drawer-list" && onToggleDrawer(false);
          }
        }}
      >
        Kontakt
      </ListItem>
    </List>
  );
}
