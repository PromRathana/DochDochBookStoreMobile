const menuToggler = document.querySelector(".icon-toggler");
      const navLists = document.querySelector(".nav-lists");
      menuToggler = addEventListener("click", () => {
        navLists.classList.toggle("show");
      });