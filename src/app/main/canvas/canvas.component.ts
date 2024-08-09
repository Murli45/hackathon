import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface SurgeryType { name: String }
interface ImageItem {
  label: string;
  value: string;
  imageUrl: string;
  name: string;
  usage: string;
  description: string;
}

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})

export class CanvasComponent implements OnInit {
  items: MenuItem[];
  loading: boolean = false;
  surgeryType: SurgeryType[] = [];

  images: ImageItem[];
  selectedImage: ImageItem;

  isCollapsed: boolean = true; // Initial state of the panel

  toolName: string = 'NA';
  toolDescription: string = 'NA';
  toolUsage: string = 'NA';

  tools: string[] = [];
  processStarted: boolean = false;
  nextTool: ImageItem;
  usedTool: ImageItem[];

  constructor() { }

  ngOnInit() {
    // call service to fetch surgery type
    this.surgeryType = [{ name: 'Heart Surgery' }, { name: 'Brain Surgery' }, { name: 'Knee Surgery' }]
    this.usedTool = [];
  }

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
      this.isCollapsed = !this.isCollapsed;
      // call to fetch tool list
      this.images = [
        { label: 'Image 1', value: 'image1', imageUrl: 'assets/images/tools/1.jpg', name: 'Forcep', description: 'Tool for grasping or holding tissues', usage: 'Used to grasp, hold, or manipulate tissues ' },
        { label: 'Image 2', value: 'image2', imageUrl: 'assets/images/tools/2.jpg', name: 'Rectractor', description: 'Surgical tool for holding back tissues', usage: 'Used to expose underlying tissues or organs' },
        { label: 'Image 3', value: 'image3', imageUrl: 'assets/images/tools/3.jpg', name: 'Scissor', description: 'Precision tool for cutting tissues', usage: 'Used for cutting tissues, sutures, or dressings' }
      ];

      setTimeout(() => {
        this.processStarted = true;

        console.log('process started')
        this.toolUsageSimulation();

        setInterval(() => {
          console.log('recurrent interval started!', this.nextTool)
          this.nextTool = this.images.pop();

          if (!this.nextTool) {
            this.processStarted = false;

            this.toolName = 'NA';
            this.toolDescription = 'NA';
            this.toolUsage = 'NA';
          } else {
            this.toolName = this.nextTool.name;
            this.toolDescription = this.nextTool.description;
            this.toolUsage = this.nextTool.usage;
            this.toolHistory(this.nextTool)
          }

        }, 5000)

      }, 2000)

    }, 2000);
  }

  toolUsageSimulation() {
    this.nextTool = this.images.pop();
    this.toolName = this.nextTool.name;
    this.toolDescription = this.nextTool.description;
    this.toolUsage = this.nextTool.usage;
    this.toolHistory(this.nextTool)

    if (!this.nextTool)
      this.processStarted = false;
  }

  toolHistory(tool: ImageItem) {
    setTimeout(() => {
      this.usedTool.push(tool)
    }, 5000)
  }
}


