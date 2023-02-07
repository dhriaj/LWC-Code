import { LightningElement , wire } from 'lwc';
import getaccount from '@salesforce/apex/forloopwireclass.getaccount';

export default class Foorloopwithwire extends LightningElement {


@wire(getaccount)
players;

}