import Image from "next/image";

const BlogId = () => {
  return (
    <div className="blogIdContainer">
      <div className="top flex">
        <div className="info flex-1 flex flex-col justify-between">
          <h1 className="title text-[40px] font-bold">
            Lorem, ipsum doloritaque, quia laudantium eos sint nostr
          </h1>
          <p className="desc text-lg font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            itaque, quia laudantium eos sint nostrum assumenda, perferendis
            ipsam repellat vel delectus, iure praesentium dolorem hic culpa
            velit dolore magnam facere dolorum magni eligendi.
          </p>
          <div className="author flex items-center gap-[10px]">
            <div className="h-10 w-10 relative">
              <Image
                src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80"
                alt="blog - homie"
                fill
                className="avatar object-cover rounded-[50%]"
              />
            </div>
            <span className="username">Hojn Ode</span>
          </div>
        </div>
        <div className="imageContainer flex-1 h-[300px] relative">
          <Image
            src="https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=908&q=80"
            alt="kereta - homie"
            fill
            className="image object-cover"
          />
        </div>
      </div>
      <div className="content mt-[50px] text-xl font-light text-gray-300 text-justify">
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          officia? Blanditiis sint qui tenetur id possimus non velit! Nobis
          dignissimos eligendi sed sit nisi adipisci vitae facere expedita natus
          ex eos, eveniet obcaecati perspiciatis aperiam odio ab praesentium
          assumenda dolore libero cumque ipsam quia, reprehenderit repellat.
          Mollitia veniam nostrum suscipit neque repellat ipsam veritatis fugiat
          <br />
          <br />
          quam molestiae, praesentium natus aperiam assumenda facilis sint
          quibusdam quas architecto? Ea nesciunt adipisci dolore, ratione
          repellat exercitationem veniam voluptatem! Saepe voluptatem
          <br />
          <br />
          dignissimos, nostrum aperiam hic voluptate similique nesciunt
          repudiandae at quibusdam ex dolore, nam qui eligendi quam ipsa quia
          ipsum aspernatur veritatis incidunt cupiditate architecto? Aperiam
          explicabo natus labore, similique sed autem a pariatur accusantium
          soluta nostrum iure eos et fugit. Cupiditate officia quod impedit.
          Dolore quisquam similique doloribus commodi a magnam. Voluptatum ex
        </p>
      </div>
    </div>
  );
};

export default BlogId;
