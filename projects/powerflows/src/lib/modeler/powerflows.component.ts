/*
 *
 * Copyright (c) 2018-present PowerFlows.org - all rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import {Component, Input, OnInit} from '@angular/core';
import {PowerFlowsService} from '../powerflows.service';
import {Decision} from './model/decision.model';
import {InputEntry, Rule} from './model/rule.model';
import {RuleInput, RuleOutput} from './model/field.model';

@Component({
  selector: 'lib-power-flows',
  templateUrl: './powerflows.component.html',
  styleUrls: ['./powerflows.component.sass']
})
export class PowerFlowsComponent implements OnInit {

  @Input()
  public decision: Decision;

  public editingRule: Rule;

  constructor(private powerflowsService: PowerFlowsService) {
  }

  ngOnInit() {
  }

  getSortedInputs() {
    return this.decision.inputs.sort((i1, i2) => i1.order - i2.order);
  }

  getSortedOutputs() {
    return this.decision.outputs.sort((o1, o2) => o1.order - o2.order);
  }

  getEntryForInput(rule: Rule, input: RuleInput): InputEntry {
    return rule.inputEntries.find(inputEntry => inputEntry.name === input.name);
  }

  getEntryForOutput(rule: Rule, output: RuleOutput): InputEntry {
    return rule.outputEntries.find(outputEntry => outputEntry.name === output.name);
  }
}
