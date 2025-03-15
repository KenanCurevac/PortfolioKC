import "./NavLinks.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function NavLinks({
  scrollToSection,
  aboutSection,
  educationSection,
  careerSection,
  projectsSection,
  contactSection,
  onToggleDrawer,
  className,
}) {
  return (
    <List className={className}>
      <ListItem
        className="navbar-item"
        onClick={() => {
          scrollToSection(aboutSection);
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
          scrollToSection(educationSection);
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
          scrollToSection(careerSection);
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
          scrollToSection(projectsSection);
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
          scrollToSection(contactSection);
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
