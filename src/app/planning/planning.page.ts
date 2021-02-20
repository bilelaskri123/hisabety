import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalModalPage } from '../cal-modal/cal-modal.page';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.page.html',
  styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {

  stocks = [
    {
      id:1,
      name: "المخزن الرئيسي ",
      products: [
        {
          name: "زيتون",
          quantity: "100",
          piece_numbers:"10"
        },
        {
          name: "أرز",
          quantity: "1000",
          piece_numbers:"2"
        },
        {
          name: "فول",
          quantity: "500",
          piece_numbers:"3"
        }
      ]
    },
    {
      id:2,
      name: "مخزن الشرق",
      products: [
        {
          name: "دجاج",
          quantity: "180",
          piece_numbers:"5"
        },
        {
          name: "ابقار",
          quantity: "20",
          piece_numbers:"3"
        },
        {
          name: "علوش",
          quantity: "100",
          piece_numbers:"5"
        }
      ]
    },
    {
      id:3,
      name: "مخزن طرابلس",
      products: [
        {
          name: "أسماك",
          quantity: "450",
          piece_numbers:"3"
        },
        {
          name: "أسماك معلبة",
          quantity: "3000",
          piece_numbers:"2"
        },
        {
          name: "أسماك جودة عالية",
          quantity: "8",
          piece_numbers:"2"
        }
      ]
    },
    {
      id:4,
      name: "مخزن مصراتة",
      products: [
        {
          name: "حليب",
          quantity: "2000",
          piece_numbers:"5"
        },
        {
          name: "البان",
          quantity: "1000",
          piece_numbers:"3"
        },
        {
          name: "زبادي",
          quantity: "500",
          piece_numbers:"10"
        }
      ]
    }
  ];

  products= [];
  depots= [];
  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
      this.stocks.map((stock) => {

      stock.products.map((product) => {
          this.products.push(product);
        });
        console.log('------ depots -----', this.products);
        let depot ={
          id: stock.id,
          name: stock.name
        };
      this.depots.push(depot);
      });
      console.log('------ depots -----',this.depots);
  }

  // Change current month/week/day
  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK'],
    });
    alert.present();
  }

  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
        startTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + startDay
          )
        );
        if (endDay === startDay) {
          endDay += 1;
        }
        endTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + endDay
          )
        );
        events.push({
          title: 'All Day - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: true,
        });
      } else {
        var startMinute = Math.floor(Math.random() * 24 * 60);
        var endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + startDay,
          0,
          date.getMinutes() + startMinute
        );
        endTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + endDay,
          0,
          date.getMinutes() + endMinute
        );
        events.push({
          title: 'Event - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
        });
      }
    }
    this.eventSource = events;
  }

  removeEvents() {
    this.eventSource = [];
  }

  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: CalModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });

    await modal.present();

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.event) {
        let event = result.data.event;
        if (event.allDay) {
          let start = event.startTime;
          event.startTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate()
            )
          );
          event.endTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate() + 1
            )
          );
        }
        this.eventSource.push(result.data.event);
        this.myCal.loadEvents();
      }
    });
  }

  onSelectChange(event: number) {
    console.log(event);
  }
}
