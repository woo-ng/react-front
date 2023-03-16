import React, { useEffect, useState } from 'react';
import { ReactComponent as NewTag } from './newTag.svg';
import Header from '../header/Header';
import styles from './Self.module.scss';

const Self = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    console.log({ projects });
    // fetch("https://ohou.se/projects.json?query=%EB%AF%B8%EB%8B%88%20%ED%99%94%EC%9E%A5%EB%8C%80&input_source=integrated&search_affect_type=Issue&page=2&per=20&v=3")
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
      });
  }, []);

  const list = projects.map((item) => (
    <article class={styles.item}>
      <a href="./self">
        <div class={styles.item_image}>
          <img src={item.cover_image_url} />
        </div>
        <span class="project-feed__item__image__new" aria-label="NEW">
          <NewTag style={{ margin: '10px' }} />
        </span>
        <div class={styles.content}>
          <h1 class={styles.title}>{item.title}</h1>
          <div class={styles.item_title_profile}>
            <img class={styles.profile} src={item.profile_image_url}></img>
            <span className={styles.nick}>{item.nickname}</span>
          </div>
        </div>
      </a>
    </article>
  ));

  return (
    <>
      <Header />
      <main className="d-flex flex-wrap">{list}</main>
    </>
  );
};

export default Self;
