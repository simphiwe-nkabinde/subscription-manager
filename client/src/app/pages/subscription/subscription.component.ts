import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  subscriptionPlans = [
    {
      id: 1,
      monthPeriod: 1,
      price: 99 
    },
    {
      id: 2,
      monthPeriod: 3,
      price: 199
    },
    {
      id: 3,
      monthPeriod: 6,
      price: 299
    }
  ]
  chosenPlanId = 0

  constructor() { }

  choosePlan(planId: any) {
    console.log(planId);
    
    this.chosenPlanId = planId
  }

  ngOnInit(): void {
  }

}
