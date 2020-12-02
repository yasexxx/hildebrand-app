import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  apiContent1 = [
    {
      slug: 'article-1',
      title: 'Lorem, ipsum dolor 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum temporibus, ad neque hic eos rem unde, eligendi deserunt et distinctio nesciunt saepe nihil amet minus porro at sed cupiditate eaque vero id ipsum placeat, cumque cum! Quo quasi necessitatibus adipisci, similique accusantium cumque aut nulla, quis aliquid totam officiis enim dolores libero odio sed iure voluptatibus. Esse, illum eveniet! Voluptatum, distinctio! Rerum recusandae id harum veritatis sit ad possimus nisi?'
    },
    {
      slug: 'article-2',
      title: 'Lorem, ipsum dolor 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima aspernatur, obcaecati iure aliquam, hic quidem accusantium autem delectus dignissimos a provident? Facere consequuntur alias ab dicta obcaecati deleniti ad voluptatem, quibusdam magnam in inventore. Laborum harum labore architecto mollitia atque, doloremque quisquam illo reprehenderit adipisci veniam aperiam ratione alias deserunt similique tempore placeat sapiente quos ipsa temporibus tempora at in. Vitae ducimus temporibus, consequatur accusamus vero laudantium numquam modi doloribus quas dolorem mollitia sequi nesciunt quidem nihil, magni sapiente porro ut voluptatem voluptates labore iusto quia dolore? Aut voluptatibus necessitatibus, praesentium ipsa dicta voluptate, dolore, quae omnis quia numquam esse aliquid incidunt harum. Odio sit nostrum reprehenderit, voluptatum autem maxime quisquam omnis nihil nam id quo quidem ea eos, quaerat placeat debitis obcaecati corporis? Eius cupiditate error architecto perspiciatis.'
    },
    {
      slug: 'article-3',
      title: 'Lorem, ipsum dolor 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad tenetur quaerat alias, praesentium accusamus aliquid dolor modi placeat! Animi quos voluptates qui laboriosam accusantium repudiandae cumque totam error? Ipsum fugiat tenetur expedita? Iure nostrum modi minus vero, exercitationem perferendis! Unde nihil rem hic voluptatem rerum sint eligendi numquam, voluptate laudantium modi veniam obcaecati, id maxime quisquam dolorum nisi facere odit cum eveniet ab ratione! Pariatur repudiandae reprehenderit beatae doloremque a. Soluta saepe nostrum aut voluptatem quidem non explicabo temporibus debitis dicta, ipsa magnam dolorum, omnis itaque? Nihil unde itaque amet non iste. Aspernatur culpa, similique, repellat aperiam modi ad odio enim dignissimos architecto suscipit consequatur velit cum iste animi eligendi. Ex eaque vitae deserunt repellat corrupti impedit nulla at rerum dolore ducimus suscipit hic voluptatum doloremque quo reprehenderit magnam dolorum, ipsam pariatur. Minima sapiente odio fugiat quasi dicta dolorum nulla id accusamus libero omnis consequatur eum quibusdam error velit natus voluptas maiores culpa similique voluptates repudiandae provident, incidunt eaque.'
    }
  ]

  ngOnInit(): void {
  }

}
