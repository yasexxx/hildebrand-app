import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  apiAboutContent = [
    {
      name: 'paragraph-1',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellendus vero illo minima, atque architecto sequi? Commodi esse quaerat beatae totam officiis illum incidunt, earum exercitationem doloribus laboriosam rerum, sunt nesciunt enim modi provident minima neque eos ratione amet omnis ipsa excepturi culpa dolorum. Accusantium iure fugiat sint similique dolore. Necessitatibus vero laudantium illum, nesciunt nam consequuntur optio est commodi.'
    },
    {
      name: 'paragraph-2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima dolores voluptates sed nobis quibusdam, ad quidem pariatur eius, quam iste modi reprehenderit. Assumenda aliquid rem officiis quibusdam illum fuga, qui, ducimus eaque obcaecati quia iure maxime ipsam impedit debitis est, ipsum sunt quidem optio placeat esse? Repellat aperiam eum error quae facilis dolorum minus ullam accusamus possimus neque aliquid est id eveniet similique esse aspernatur qui quos reprehenderit sed vero architecto, excepturi facere libero! Libero iste inventore nulla earum.'
    },
    {
      name: 'paragraph-3',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique perferendis numquam, tempora expedita quisquam placeat totam in minima laborum nostrum et hic porro eaque ipsam, itaque assumenda voluptatem rerum accusamus adipisci! Tenetur, fugiat, incidunt quia consectetur cupiditate perspiciatis atque dignissimos itaque reiciendis, sint molestiae molestias saepe libero laborum dolor. Nostrum ad et atque fugit molestiae, iusto quam ipsum quasi deleniti quas, ipsam veritatis at magni? A fugiat vitae quas iusto repellat et molestiae laboriosam maxime quidem sint aliquid necessitatibus tenetur quia ratione possimus reiciendis sapiente tempora suscipit, accusantium assumenda autem animi? Vel ut nobis alias expedita dolor ex assumenda unde qui, facilis, error eligendi saepe laborum? Ex natus, fugit porro quis repellendus, vitae perspiciatis, laboriosam in debitis dolor quasi sequi!'
    },
    {
      name: 'paragraph-4',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquid esse quam consectetur eum. Sunt aliquid perspiciatis sapiente animi quae, laudantium commodi eveniet earum odit, corporis tempore accusamus, fuga distinctio delectus minima quasi! Dolor repellat laborum nostrum provident ratione eaque eius? Ullam, qui repellendus fuga odio quidem aut doloribus sed aliquid hic itaque consectetur quaerat nesciunt rerum culpa unde necessitatibus in ratione dolorum aperiam sit officiis ut voluptas ducimus a. Nam modi nobis veritatis mollitia velit maiores ex enim facilis, nesciunt aspernatur ut iure eum id deleniti maxime, in nihil fugiat nisi ipsa magnam nulla est sed sunt? Voluptates ipsum nisi quasi unde doloribus illum quos aut repudiandae omnis commodi porro beatae officia rerum provident dignissimos reiciendis animi veniam, recusandae deserunt laudantium, minima cum! Corrupti amet reprehenderit iure necessitatibus cupiditate, impedit quaerat adipisci fugit blanditiis sit doloremque cumque eum laboriosam. Excepturi facilis praesentium ratione odit, nihil harum adipisci quo perferendis! Repudiandae, natus. Unde eligendi facere, deleniti tempora explicabo corporis eius nulla sint sequi quis harum accusamus nobis iusto voluptate quibusdam ab quo atque vel, illo quos officiis. Corporis pariatur dicta ex minus animi itaque quae accusamus accusantium voluptas nobis iusto doloribus et iure, blanditiis ea dolor quibusdam consequatur cupiditate, alias atque libero maxime aspernatur consectetur. Provident quia, odit distinctio reiciendis voluptatem necessitatibus ab itaque laborum magni quisquam eum. Tenetur harum commodi ipsam quia perspiciatis numquam nihil corrupti accusamus sed sapiente.'
    },
    {
      name: 'paragraph-5',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium labore laboriosam, eaque fugit illo optio voluptatum quis ex ipsam? Quisquam nobis numquam eaque velit iste, laborum, quod soluta adipisci fugiat enim, voluptas nostrum minima quibusdam dicta quia atque illo voluptatem excepturi ducimus eum quaerat voluptates tenetur! Ad tempore doloremque mollitia possimus maxime voluptatem harum praesentium, eligendi, fuga tempora soluta doloribus id laborum eos corporis quibusdam ipsum in nisi, reiciendis recusandae omnis eum repellat officia nam? Labore eaque perspiciatis quibusdam numquam tempore vero, fuga possimus natus dolores quos minus cum? Impedit sint, eligendi praesentium architecto quis consectetur laboriosam quo quas quae qui obcaecati inventore, aut voluptates. Est aut, quas adipisci harum blanditiis asperiores reprehenderit dolorem exercitationem placeat quibusdam nam, beatae incidunt illo deserunt commodi corporis inventore fuga? Voluptates fugiat blanditiis amet? Cum aliquid quae ut vel vitae a, commodi unde ab dolorem aspernatur eaque repellendus omnis rerum asperiores totam quibusdam reprehenderit! Autem minima dolorum quia recusandae a nam delectus deserunt aliquid similique, doloribus sit blanditiis, ullam maiores molestiae accusantium voluptatem officiis. Expedita ea aut libero dolor! Ad, tempore rem! At veritatis soluta facere, mollitia repellendus tempora labore dolores aspernatur nesciunt? Perferendis praesentium quo fugit sequi ipsum earum maxime cupiditate totam numquam?'
    },
    {
      name: 'paragraph-6',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, dignissimos. Quis perspiciatis, unde suscipit esse expedita nulla facere similique vitae quo dolor debitis, ipsam dolorum animi molestias facilis optio, inventore quae ipsum doloremque totam non? Minima distinctio, molestiae ipsum veritatis voluptatibus aliquid est hic obcaecati quia ipsa soluta doloribus placeat sit error aspernatur iste voluptates impedit repudiandae asperiores sequi suscipit quae? Fugiat molestiae ipsa quibusdam blanditiis corrupti mollitia tempore nihil aliquam consectetur, et quisquam expedita sit! Possimus laborum ducimus aut optio asperiores corrupti. Tenetur id commodi harum laborum! Quidem officia expedita sequi amet quas eligendi minus culpa hic laborum sapiente maxime, ratione omnis ex accusantium doloremque ducimus nisi commodi. Itaque, debitis sed? Corrupti autem harum ab cumque doloribus recusandae itaque quod hic quibusdam, fuga officia rem asperiores assumenda in corporis delectus quas nemo iste explicabo eveniet debitis ut, quasi iure! Commodi aspernatur explicabo non rerum accusantium sit eveniet tempora ut?'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
