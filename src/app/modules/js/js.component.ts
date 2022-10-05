import { Component, OnInit } from "@angular/core";
import { map, mergeMap } from "rxjs/operators";
import { Node } from "./shared/models";

@Component({
  selector: "app-js",
  templateUrl: "./js.component.html",
  styleUrls: ["./js.component.css"]
})
export class JSComponent implements OnInit {
  constructor() {}

  ds: Node = {
    name: "Lao Lao",
    title: "general manager",
    children: [
      { name: "Bo Miao", title: "department manager" },
      {
        name: "Su Miao",
        title: "department manager",
        children: [
          { name: "Tie Hua", title: "senior engineer" },
          {
            name: "Hei Hei",
            title: "senior engineer",
            children: [
              { name: "Dan Zai", title: "engineer" },
              { name: "Dan Dan", title: "engineer" },
              { name: "Xiang Xiang", title: "engineer" },
              { name: "Ke Xin", title: "engineer" },
              { name: "Xiao Dan", title: "engineer" },
              { name: "Dan Dan Zai", title: "engineer" }
            ]
          },
          { name: "Pang Pang", title: "senior engineer" },
          { name: "Er Pang", title: "senior engineer" },
          { name: "San Pang", title: "senior engineer" },
          { name: "Si Pang", title: "senior engineer" }
        ]
      },
      { name: "Hong Miao", title: "department manager" },
      { name: "Chun Miao", title: "department manager" },
      { name: "Yu Li", title: "department manager" },
      { name: "Yu Jie", title: "department manager" },
      { name: "Yu Wei", title: "department manager" },
      { name: "Yu Tie", title: "department manager" }
    ]
  };

  nodeHeadingProperty = "name";
  nodeContentProperty = "title";

  ngOnInit() {}

  selectNode(nodeData: object) {
    alert("Hi All. I'm " + nodeData.name + ". I'm a " + nodeData.title + ".");
  }
}
