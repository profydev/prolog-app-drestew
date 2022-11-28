import styled from "styled-components";
import { ProjectCard } from "../project-card";
import { useProjects } from "@features/projects";
import { breakpoint, space, color } from "@styles/theme";
import { LoadingSpinner } from "@features/projects/loading-spinner";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${space(6)};

  // reset list styles
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${breakpoint("desktop")}) {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${color("error", 25)};
  padding: 1rem;
  border: solid 1px ${color("error", 300)};
  border-radius: 8px;
`;

const ErrorContent = styled.div`
  color: ${color("error", 700)};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  & > p {
    margin: 0;
  }
`;

export function ProjectList() {
  const { data, isLoading, isError, error } = useProjects();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    console.error(error);
    return (
      <ErrorContainer data-cy="error">
        <ErrorContent>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/error-alert.svg" alt="alert" />
          <p>There was a problem while loading the project data</p>
        </ErrorContent>
        <ErrorContent onClick={useProjects}>
          <p>Try again</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/error-arrow-right.svg" alt="arrow-right" />
        </ErrorContent>
      </ErrorContainer>
    );
  }

  return (
    <List>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </List>
  );
}
