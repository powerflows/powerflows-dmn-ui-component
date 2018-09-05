/*
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
 */

import {Component, OnInit} from '@angular/core';
import {Decision, HitPolicy} from '../../../powerflows/src/lib/modeler/model/decision.model';
import {ExpressionType} from '../../../powerflows/src/lib/modeler/model/expression.model';
import {RuleInput, RuleOutput, ValueType} from '../../../powerflows/src/lib/modeler/model/field.model';
import {Rule} from '../../../powerflows/src/lib/modeler/model/rule.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'powerflows-dmn-ui-component';

  public decision: Decision;

  ngOnInit(): void {
    this.decision = this.createFakeDecision();

  }

  private createFakeDecision(): Decision {
    const decision = new Decision();
    decision.id = 'Fake decision';
    decision.name = 'This is mocked Decision';
    decision.expressionType = ExpressionType.LITERAL;
    decision.hitPolicy = HitPolicy.UNIQUE;

    const input1 = new RuleInput();
    input1.name = 'First input (string)';
    input1.description = 'This is very important first input';
    input1.type = ValueType.STRING;
    input1.expression = null;
    input1.order = 2;

    const input2 = new RuleInput();
    input2.name = 'Second input (boolean)';
    input2.description = 'This is very important second input';
    input2.type = ValueType.BOOLEAN;
    input2.expression = null;
    input2.order = 1;

    const input3 = new RuleInput();
    input3.name = 'Third input (collection)';
    input3.description = 'This is very important third input';
    input3.type = ValueType.COLLECTION;
    input3.expression = null;
    input3.order = 3;

    decision.inputs = [input1, input2, input3];

    const output1 = new RuleOutput();
    output1.name = 'Output 1';
    output1.description = 'Output 1 description';
    output1.type = ValueType.BOOLEAN;
    decision.outputs = [output1];

    const rule1 = new Rule();
    const inputEntry1 = {
      name: 'First input (string)',
      expression: {value: 'r1 for input1', type: ExpressionType.LITERAL}
    };

    const inputEntry2 = {
      name: 'Second input (boolean)',
      expression: {value: 'r1 for input2', type: ExpressionType.LITERAL}
    };

    const inputEntry3 = {
      name: 'Third input (collection)',
      expression: {value: 'r1 for input3', type: ExpressionType.LITERAL}
    };

    rule1.inputEntries = [inputEntry1, inputEntry2, inputEntry3];


    const outputEntry1 = {
      name: 'Output 1',
      expression: {value: 'r1 for output1', type: ExpressionType.LITERAL}
    };
    rule1.outputEntries = [outputEntry1];

    const rule2 = new Rule();
    Object.assign(rule2, rule1);
    rule2.order = 2;

    const rule3 = new Rule();
    Object.assign(rule3, rule1);
    rule2.order = 3;
    decision.rules = [rule1, rule2, rule3];

    return decision;
  }
}
