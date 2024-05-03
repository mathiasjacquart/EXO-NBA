
import styles from "./Team.module.scss";
import DisplayConf from "./DisplayConf";
export default function Team({ person, teams,licensed, view, login }) {
  //   console.log({ person });
  //   console.log({ teams });
  return (
    <div
      className="d-flex flex-column jc-start mt-30"
      style={{ width: "100%" }}> 
      <div>
        <h2 className={`mt-30 ${styles.presentation}`}>
          Welcome {person.name} !
        </h2>
        <div>
          <button className="btn-primary" onClick={login}></button>
        </div>
      </div>

      {licensed ? (
        view === "all" ? (
          <>
          <DisplayConf teams={teams}/>
          </>
        ) :view === "East" ? (
          <>
          <DisplayConf teams={teams} view={view}/>
          </>
        ) : view === "West" ? (
          <>
            <DisplayConf teams={teams} view={view}/>
          </>
          ) : null


      ) : (
        <p className="text-error">Vous devez être licensié</p>
      )}
    </div>
  );
}
