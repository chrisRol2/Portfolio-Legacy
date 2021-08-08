const d = document;

const scrollSpy = () => {
  const $navSpy = d.querySelectorAll("div[scrollspy]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (!entry.isIntersecting) {
        d.querySelector(`a[href="#${id}"]`).classList.remove("active");
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    threshold: 0.7,
  });
  $navSpy.forEach((e) => observer.observe(e));
  return { $navSpy, observer };
};

export const firstLoad = () => {
  const $title__component = d.querySelectorAll(".title__component");

  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        d.querySelector(`#${entry.target.id}`).classList.add(
          "animate__animated"
        );
        d.querySelector(`#${entry.target.id}`).classList.add(
          "animate__flipInX"
        );

        // console.log(entry.target.id);
      }
    });
  };
  const observer = new IntersectionObserver(cb, { threshold: 0.8 });
  $title__component.forEach((e) => observer.observe(e));

  return { $title__component, observer };
};

export const unObserver = ({objectOberved, observer}) => {
  // objectOberved.forEach((e) => observer.unobserve(e));
  console.log("desmontado");
};

export default scrollSpy;
