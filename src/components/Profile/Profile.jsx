// import clsx from "clsx";
import s from "./Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.card}>
      <div className={s.userData}>
        <img className={s.avatar} src={avatar} alt={tag} />
        <p className={s.boldText}>{username}</p>
        <p className={s.lightText}>@{tag}</p>
        <p className={s.lightText}>{location}</p>
      </div>

      <ul className={s.statsList}>
        <li className={s.statsItem}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={s.statsItem}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={s.statsItem}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
